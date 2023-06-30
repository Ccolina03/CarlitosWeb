import React,{FC} from 'react'
import Carlitos from '../gallery/Screenshot_20230125_115845.png'

export interface CarlosProps {
    noShowSm?: boolean;
}

const getCarlos = (noShowSm: Pick<CarlosProps, 'noShowSm' >['noShowSm']):string => {
    switch (noShowSm) {
        case true:
            return 'flex-shrink-0 w-50 h-80 items-center m-16 xs:mt-6'
        case false:
            return 'lg:flex-shrink'
        default:
            return 'flex-shrink-0 w-50 h-80 items-center m-16 xs:mt-6'
    }

}


const Carlos: FC<CarlosProps> = (
    {
        noShowSm,
    }
) => {
    return (
        <div className={`flex justify-center ${getCarlos(noShowSm)}`}>
            <img className="object-contain rounded-lg w-auto h-full" src={Carlitos} alt="Carlos Picture"></img>
        </div>
    )
}

export default Carlos;