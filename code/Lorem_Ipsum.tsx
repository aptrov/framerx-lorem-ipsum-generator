import * as React from 'react';
import { ControlType } from 'framer';
import 'getlorem';

class Lorem_Ipsum_Text extends React.PureComponent {
  render() {
    return (
      <>
        {window.getlorem[this.props.units](
          this.props.count,
          undefined,
          this.props.startWithLoremIpsum,
        )}
      </>
    );
  }
}

class Lorem_Ipsum_Wrapper extends React.PureComponent {
  render() {
    return (
      <div style={this.props.style}>
        <Lorem_Ipsum_Text
          units={this.props.units}
          count={this.props.count}
          startWithLoremIpsum={this.props.startWithLoremIpsum}
        />
      </div>
    );
  }
}

export class Lorem_Ipsum extends React.Component {
  static defaultProps = {
    typeface: 'sans-serif',
    weight: '400',
    size: 16,
    style: 'normal',
    count: 2,
    units: 'words',
    startWithLoremIpsum: true,
    color: 'black',
  };

  static propertyControls = {
    typeface: { type: ControlType.String, title: 'Typeface' },
    weight: {
      type: ControlType.Enum,
      options: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
      optionTitles: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
      title: 'Weight',
    },
    style: {
      type: ControlType.SegmentedEnum,
      title: ' ',
      options: ['normal', 'italic'],
      optionTitles: ['Normal', 'Italic'],
    },
    size: { type: ControlType.Number, min: 1, title: 'Size' },
    color: { type: ControlType.Color, title: 'Color' },
    align: {
      type: ControlType.SegmentedEnum,
      title: 'Align',
      options: ['left', 'center', 'right', 'justify'],
      optionTitles: ['L', 'C', 'R', 'J'],
    },
    count: { type: ControlType.Number, min: 1, title: 'Count' },
    units: {
      type: ControlType.Enum,
      options: ['words', 'sentences', 'paragraphs', 'bytes'],
      optionTitles: ['Words', 'Sentences', 'Paragraphs', 'Bytes'],
      title: 'Units',
    },
    startWithLoremIpsum: {
      type: ControlType.Boolean,
      title: 'Lorem ipsum...',
      enabledTitle: 'Yes',
      disabledTitle: 'No',
    },
  };

  render() {
    const {
      count,
      units,
      startWithLoremIpsum,
      color,
      typeface: fontFamily,
      weight: fontWeight,
      size: fontSize,
      style: fontStyle,
      align: textAlign,
    } = this.props;

    return (
      <Lorem_Ipsum_Wrapper
        count={count}
        units={units}
        startWithLoremIpsum={startWithLoremIpsum}
        style={{
          color,
          fontFamily,
          fontWeight,
          fontSize,
          fontStyle,
          textAlign,
          overflow: 'hidden',
          height: '100%',
        }}
      />
    );
  }
}
