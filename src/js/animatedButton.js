import EkoUIComponents from 'EkoUIComponents';
import '../scss/animatedButton.scss';

export default class animatedButton extends EkoUIComponents.EkoDecisionButton {
    clickHandler() {
        console.log('woohoo!');
    }

    getContent() {
        return (
            <button className="btn">
            <span>{this.props.config.text}</span>
        </button>
    );
    }
}