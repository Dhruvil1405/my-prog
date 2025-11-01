//function component
const Firstcomponent = () =>{
    let myStyle ={
        display:'flex',
        alignItems:'center',
        height:'20px',
        margin:'0',
        backgroundColor:'gray'
        }
    
    return (
        <>
        <div>
            <h3 style={{color:'white',backgroundColor:'black',fontSize:'30px',}}>My Info</h3>
            <h3 style={myStyle}>Name : <p>Dhruvil Patel</p></h3>
            <h3 style={myStyle}>Age : <p>20</p></h3>
            <h3 style={myStyle}>E-mail : <p>dhruvilpatel12@gamil.com</p></h3>
            <h3 style={myStyle}>Phone no. : <p>7324510871</p></h3>
        <hr />
        </div>
        </>
    );
}

export default Firstcomponent;