export default function DessersList({data}){
    
    return(
            data.map(dessert => {
                return (
                    <div key={dessert.createdAT}>{dessert.name} - {dessert.calories}</div>
                )
            })
    )
}