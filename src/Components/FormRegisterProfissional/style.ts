import styled from "styled-components";

export const Container = styled.div`
    
   position: relative; 
                        
    form{
        margin: 0 auto;
        padding: 0 1rem;
        width: 80%;
    }

    .link{
        text-align: right;
    }

    svg{
        margin-right: 5px;
    }

    input{
        margin: 5px 0px;
    }

    .container-Buttons{
        margin: 8px 0px;

        .box-right{
            text-align: right;
        }
        p{
            text-align: center;
            margin: 5px 0px;
            font-size: 1.2rem;
            font-weight: bold;
        }

        button{
            height:35px;
            width: 125px;
            font-size: 1.1rem;
            font-family: "saira";
            border-radius: 5px;
        }
        
    }
`; 