import { useRecoilValue, useSetRecoilState } from 'recoil'
import { EditProperties } from './components/EditProperties'
import { Rectangle} from './components/Rectangle/Rectangle'
import {PageContainer} from './PageContainer'
import { elementsAtom } from './store/atoms/elementsAtom'
import { selectedElementAtom } from './store/atoms/selectedElementAtom'
import {Toolbar} from './Toolbar'
import { Element } from './types'




export type SetElement = (indexToSet: number, newElement: Element) => void

function Canvas() {

    const setSelectedElement = useSetRecoilState(selectedElementAtom)
    const elements = useRecoilValue(elementsAtom)

    return (
                <PageContainer
                    onClick={() => {
                        setSelectedElement(null)
                    }}
                >
                    <Toolbar />
                    <EditProperties/>
                    {elements.map((id) => (
                        <Rectangle key={id} id={id} />
                    ))}
                </PageContainer>
    )
}

export default Canvas