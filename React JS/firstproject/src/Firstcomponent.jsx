//function component
const Firstcomponent = () =>{
    let myStyle ={
        display:'flex',
        alignItems:'center',
        height:'30px',
        margin:'0',
        backgroundColor:'gray'
        }
    
    return (
        <>
        <div>
            <h3 style={{color:'white',backgroundColor:'black',fontSize:'30px',}}>My Info</h3>
            <h3 style={myStyle}>Name : Dhruvil Patel</h3>
            <h3 style={myStyle}>Age : 20</h3>
            <h3 style={myStyle}>E-mail : dhruvilpatel12@gamil.com</h3>
            <h3 style={myStyle}>Phone no. : 7324510871</h3>
        <hr />
        </div>
        </>
    );
}

export default Firstcomponent;