import styled from "styled-components";

export const Container = styled.div`
h1{
    margin: 3rem  0;
}

.details{
    display:flex;
    justify-content:center;
    align-itens:center;
    margin-top:20px;
    
}

img{
    width:300px;
    border-radius: 1rem;   
    
}
span{
    font-weight:bold;
    font-size: 110%;
    line-heigth:100%;
    margin-bottom:1rem;
        


}
.info {
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    max-width:50%;
    margin-left:3rem;
    
}
.release{
    opacity:0.7;
        
}

button{
    background: blue;
    border:none;
    cursor:pointer;
    border-radius:1rem;
    color:white;
    padding: 0.8rem 2rem;
    margin-top:1rem;
    font-size:16px;
    transition: all 0.3s;
}

button:houver{
    background: #05848c2;
}

.trailer{    
    margin-top: 50px;
    text-align: center;
    padding: 10px;
    
}


`
