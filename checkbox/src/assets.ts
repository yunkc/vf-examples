import {Ids} from "./store";
import {Assets, AssetType} from '../types/IVFTemplate'

const assets: Assets = {
    [Ids.dinoImage]: {
        type: AssetType.image,
        url: "https://vipkid-edu.github.io/vf-gui/play/assets/dino.png",
        name: Ids.dinoImage.toString()
    },
    [Ids.checkboxUnselect]: {
        type: AssetType.image,
        url: 'https://vipkid-edu.github.io/vf-gui/play/assets/skin/CheckBox/unselect.png',
        name: Ids.checkboxUnselect.toString()
    },
    [Ids.checkboxUpAndSelected]: {
        type: AssetType.image,
        url: 'https://vipkid-edu.github.io/vf-gui/play/assets/skin/CheckBox/select_up.png',
        name: Ids.checkboxUpAndSelected.toString()
    },
    [Ids.checkboxDownAndSelected]: {
        type: AssetType.image,
        url: 'https://vipkid-edu.github.io/vf-gui/play/assets/skin/CheckBox/select_down.png',
        name: Ids.checkboxDownAndSelected.toString()
    },
    [Ids.checkboxDisabledAndSelected]: {
        type: AssetType.image,
        url: 'https://vipkid-edu.github.io/vf-gui/play/assets/skin/CheckBox/select_disabled.png',
        name: Ids.checkboxDisabledAndSelected.toString()
    },

    [Ids.radioUnselect]: {
        type: AssetType.image,
        url: 'https://vipkid-edu.github.io/vf-gui/play/assets/skin/Radio/unselect.png',
        name: Ids.radioUnselect.toString()
    },
    [Ids.radioUpAndSelected]: {
        type: AssetType.image,
        url: 'https://vipkid-edu.github.io/vf-gui/play/assets/skin/Radio/select_up.png',
        name: Ids.radioUpAndSelected.toString()
    },
    [Ids.radioDownAndSelected]: {
        type: AssetType.image,
        url: 'https://vipkid-edu.github.io/vf-gui/play/assets/skin/Radio/select_down.png',
        name: Ids.radioDownAndSelected.toString()
    },
    [Ids.radioDisabledAndSelected]: {
        type: AssetType.image,
        url: 'https://vipkid-edu.github.io/vf-gui/play/assets/skin/Radio/select_disabled.png',
        name: Ids.radioDisabledAndSelected.toString()
    }
}


export default assets
