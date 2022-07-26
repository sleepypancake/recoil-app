import { Suspense } from 'react'
import { useRecoilState } from 'recoil'
import { elementAtom } from '../../store/atoms/elementAtom'
import { selectedElementAtom } from '../../store/atoms/selectedElementAtom'
import {Drag} from '../Drag'
import { Resize } from '../Resize'
import {RectangleContainer} from './RectangleContainer'
import {RectangleInner} from './RectangleInner'
import { RectangleLoading } from './RectangleLoading'




export const Rectangle = ({id}: {id: number}) => {
    const [selectedElement, setSelectedElement] = useRecoilState(selectedElementAtom)
    const [element, setElement] = useRecoilState(elementAtom(id))

    const selected = id === selectedElement

    return (
        <RectangleContainer
            position={element.style.position}
            size={element.style.size}
            onSelect={() => {
                setSelectedElement(id)
            }}
        >
            
            <Resize
                selected={selected}
                position={element.style.position}
                size={element.style.size}
                onResize = {(style) => {
                    setElement({
                        ...element,
                        style
                    })
                }}
            >
                <Drag
                    position={element.style.position}
                    onDrag={(position) => {
                        setElement({
                            ...element,
                            style: {
                                ...element.style,
                                position,
                            },
                        })
                    }}
                >
                    <div>
                        <Suspense fallback={<RectangleLoading selected={selected}/>}>
                            <RectangleInner selected={selected} id={id}/>
                        </Suspense>
                    </div>
                </Drag>
            </Resize>
        
        </RectangleContainer>
    )
}