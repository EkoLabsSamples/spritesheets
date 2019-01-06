import EkoUIComponents from 'EkoUIComponents';
import './SpritesheetButton.scss';

export default class SpritesheetButton extends EkoUIComponents.EkoDecisionButton {
    getContent() {
        return (
            <button className="spritesheetBtn">
                <span>{super.getContent()}</span>
            </button>
        );
    }
}