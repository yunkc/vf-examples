import {Ids} from "./store";
import {Assets, AssetType} from '../types/IVFTemplate'

const assets: Assets = {
    [Ids.dinoImage]: {
        type: AssetType.IMAGE,
        url: 'https://vipkid-edu.github.io/vf-gui/play/assets/dino.png',
        name: Ids.dinoImage.toString()
    },
    [Ids.up]: {
        type: AssetType.IMAGE,
        url: 'https://vipkid-edu.github.io/vf-gui/play/assets/skin/Button/button_up.png',
        name: Ids.up.toString()
    },
    [Ids.move]: {
        type: AssetType.IMAGE,
        url: 'https://vipkid-edu.github.io/vf-gui/play/assets/skin/Button/button_move.png',
        name: Ids.move.toString()
    },
    [Ids.down]: {
        type: AssetType.IMAGE,
        url: 'https://vipkid-edu.github.io/vf-gui/play/assets/skin/Button/button_down.png',
        name: Ids.down.toString()
    },
    [Ids.sound1]: {
        type: AssetType.SOUND,
        url: 'https://s.vipkidstatic.com/vf/IC019/C019_selete1_sound.mp3',
        name: Ids.sound1.toString()
    },
    [Ids.sound2]: {
        type: AssetType.SOUND,
        url: 'https://s.vipkidstatic.com/vf/IC019/c019_turn.mp3',
        name: Ids.sound2.toString()
    },
}


export default assets
