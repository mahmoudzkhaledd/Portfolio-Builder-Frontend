import { IconButton } from '@mui/joy';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import NightlightRoundedIcon from '@mui/icons-material/NightlightRounded';
import store, { slice } from '@/hooks/Store/AppStore';

import { useDispatch, useSelector } from 'react-redux';

export default function ModeSwitcher() {
    const theme = useSelector(state => state.theme)
    const disp = useDispatch();
    const handelTheme = () => {
        const newTheme = (theme == "light") ? "dark" : "light";
        disp(slice.actions.setTheme(newTheme));
    };
    return (
        <IconButton onClick={handelTheme} className='icon-ext'>
            {
                theme == "light" ? <NightlightRoundedIcon /> : <LightModeRoundedIcon />
            }
        </IconButton>
    )
}
