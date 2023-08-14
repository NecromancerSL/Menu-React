import cardapio from './items.json'
import Item from './item'

export default function Items (){
    return(
        <div>
            {cardapio.map(item => (
                <div>{item.title}</div>
            ))}
        </div>
    )
}