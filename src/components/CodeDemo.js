import React, {useState, useEffect} from 'react'
import CodeSnippet from './codeSnippet'
import CodePreview from './CodePreview'

export default function CodeDemo({code, codeTitle, codeActions}) {

    const [previewEnabled, setPreview] = useState(true);

    useEffect(() => {
        if(!codeActions){
            setPreview(false)
        }
    }, [codeActions])

    function showPreview(isPreviewSelected){
        setPreview(isPreviewSelected)
    }
    function copyText(){
        navigator.clipboard.writeText(code).then(function() {
            console.log('copied');
        })
    }

    return (
        
        <div className="code-demo mt2 mb2 border rounded borderGray3">
            <div className="code-actions displayGrid gridCols2 itemsCenter p2 pb1">
                <h4 className="textGray4">{codeTitle}</h4>
                <div className="displayFlex flexWrap" style={{justifySelf: 'flex-end'}}>
                    {
                        codeActions ? (
                            <div className="btn-actions">
                                <button onClick={()=> showPreview(true)} style={{background: previewEnabled?'': 'transparent'}} 
                                        className="pl2 pr2 pt2 pb2 roundedFull borderNone mr1 hover:bgGray3">
                                    <i className="far fa-eye textRg"></i>
                                    {/* Preview */}
                                </button>
                                <button onClick={()=> showPreview(false)} style={{background: !previewEnabled?'': 'transparent'}} 
                                        className="pl2 pr2 pt2 pb2 roundedFull borderNone mr1 hover:bgGray3">
                                    <i className="fas fa-code textRg"></i>
                                    {/* Code */}
                                </button>
                            </div>
                        ): null
                    }
                    <button onClick={copyText}  
                            className="pl2 pr2 pt2 pb2 borderNone roundedFull bgTransparent mr1 hover:bgGray3">
                        <i className="far fa-copy textRg"></i>
                        {/* Code */}
                    </button>
                </div>                

            </div>

            {
                previewEnabled && <CodePreview code={code} ></CodePreview>
            }

            {
                !previewEnabled && <CodeSnippet code={code} language="html"></CodeSnippet>
            }

        </div>
    )
}
