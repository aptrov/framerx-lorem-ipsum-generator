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
    text: 'Hello World!',
    count: 2,
    units: 'words',
    startWithLoremIpsum: true,
    color: 'black',
  };

  static propertyControls = {
    count: { type: ControlType.Number, min: 1, title: 'Count' },
    units: {
      type: ControlType.Enum,
      options: ['words', 'sentences', 'paragraphs', 'bytes'],
      optionTitles: ['Words', 'Sentences', 'Paragraphs', 'Bytes'],
      title: 'Units',
    },
    color: { type: ControlType.Color, title: 'Color' },
    startWithLoremIpsum: {
      type: ControlType.Boolean,
      title: 'Lorem ipsum...',
      enabledTitle: 'Yes',
      disabledTitle: 'No',
    },
  };

  render() {
    const { count, units, startWithLoremIpsum, color } = this.props;

    return (
      <Lorem_Ipsum_Wrapper
        count={count}
        units={units}
        startWithLoremIpsum={startWithLoremIpsum}
        style={{ color, overflow: 'hidden', height: '100%' }}
      />
    );
  }
}
