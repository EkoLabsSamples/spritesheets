import EkoUIComponents from 'EkoUIComponents';
import '../scss/spritesheetButton.scss';

export default class SpritesheetButton extends EkoUIComponents.EkoDecisionButton {
    getContent() {
        return (
            <button className="btn">
                <span>{this.props.config.text}</span>
            </button>
        );
    }
}