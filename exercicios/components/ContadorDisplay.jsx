export default function ContadorDisplay(props){
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50px",
            width: "50px",
            borderRadius: "25px",
            backgroundColor: '#222',
            color: "#fff",
            fontSize: "2rm",
            margin:"20px"
        }}>
            {props.numero}
        </div>
    )
}