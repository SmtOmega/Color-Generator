import React, {useEffect, useState} from 'react'

const SingleColor = ({rgb, weight, hex, index}) => {
    const [alert, setAlert] = useState(false)
    const rgbString = rgb.join(', ')
    const hexColor = `#${hex}`

    useEffect(()=> {
        const timeOut = setTimeout(()=>{
            setAlert(false)
        }, 3000)
        return () => clearTimeout(timeOut)
    }, [alert])
    return(
    <div className={`${index > 10 ? 'color-invert' : 'color'}`} style={{backgroundColor: `rgb(${rgbString})`}}
        onClick={()=> {
            setAlert(true)
            navigator.clipboard.writeText(hexColor)
        }}
    >
        <p>{weight}</p>
        <p>{hexColor}</p>
        <p className="clipboard">{alert ? 'Copy to Clipboard': null}</p>
    </div>
    )
}
export default SingleColor