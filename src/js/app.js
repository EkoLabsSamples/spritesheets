import playerOptions from '../config/playerOptions.json';
import animatedButton from 'animatedButton';

export default {
    onLoad: function(ctx) { },

    onInit: function(player, ctx) {
        player.ui.override('button_beginning_e3bdbd', animatedButton);
    },

    playerOptions
};
