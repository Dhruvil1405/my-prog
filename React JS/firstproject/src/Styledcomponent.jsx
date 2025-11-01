import styled from "styled-components";

const Styledcomponent = (props) => {
    let H2 = styled.h2 `
    display:flex;
    justify-content:center;
    align-items:center;
    `
    let P = styled.p `
    display:flex;
    justify-content:center;
    align-items:center;
    `
    let Div = styled.div `
    display:flex;
    justify-content:center;
    align-items:center;
    `
    let Button = styled.button `
    background-color: ${(props) => (props.primary? '#6caff7ff' : '6c757d')};
    padding:5px 15px;
    border:2px solid black;
    border-radius: 5px;
    cursor: pointer;
    `
    return (
        <>
        <div>
            <card>
                <H2>Styled Component Cards</H2>
                <P>This is a simple example of using styled-<br></br>
                components in React without themes.</P>
                <Div>
                    <Button primary>Primary</Button>
                    <Button style={{marginLeft: '10px'}}>Secondary</Button>
                </Div>
            </card>
        </div>
        </>
    )
}

export default Styledcomponent;