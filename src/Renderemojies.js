/* eslint-disable array-callback-return */
import { useState, useEffect } from 'react';

const Renderemojies = ({searchresulte}) =>{
    
    let i = 0;
    let codeList = []
    const [date, setData] = useState(['']);
    const headers ="?access_key=b0cff0e3dfb18be80815ce5e0f921e0078f37897";

    useEffect(() => {
        fetch(`https://emoji-api.com/emojis${headers}`)
        .then((response) => response.json())
            .then((data) => setData([...data]));
    }, [])
    if(searchresulte.length ===0){
        return(
            <div className='component-emoji-results'>
                {date.map(
                    emoji =>
                        {
                            while(i<50){
                                i++
                                if(emoji.codePoint !== undefined){
                                    let code=[];
                                    for(let j=0;j<5;j++){
                                        if(emoji.codePoint[j] !== undefined){
                                            code += emoji.codePoint[j].trim();
                                        }
                                    }
                                    // console.log(code)
                                    let url = '//cdn.jsdelivr.net/emojione/assets/png/' + code + '.png'
                                    codeList.push(code);
    
                                    return(
                                        <div className="component-emoji-result-row copy-to-clipboard" data-clipboard-text={emoji.character} key={emoji.slug}>
                                            <img id={emoji.slug} alt={emoji.slug} src={url} />
                                            <span className="title">{emoji.slug}</span>
                                            <span className="info">Click to copy emoji</span>
                                        </div>
                                    )
                                }
                            }
    
                        }
                )}
            </div>
        )
    }
    else{
        return(
            <div className='component-emoji-results'>
                {searchresulte.map(
                    emoji =>
                        {
                            while(i<50){
                                i++
                                if(emoji.codePoint !== undefined){
                                    let code=[];
                                    for(let j=0;j<5;j++){
                                        if(emoji.codePoint[j] !== undefined){
                                            code += emoji.codePoint[j].trim();
                                        }
                                    }
                                    // console.log(code)
                                    let url = '//cdn.jsdelivr.net/emojione/assets/png/' + code + '.png'
                                    codeList.push(code);
    
                                    return(
                                        <div className="component-emoji-result-row copy-to-clipboard" data-clipboard-text={emoji.character} key={emoji.slug}>
                                            <img id={emoji.slug} alt={emoji.slug} src={url} />
                                            <span className="title">{emoji.slug}</span>
                                            <span className="info">Click to copy emoji</span>
                                        </div>
                                    )
                                }
                            }
    
                        }
                )}
            </div>
        )
    }
}

export default Renderemojies;



