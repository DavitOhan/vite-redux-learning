import styled from "styled-components";
import { colors } from "styles/colors";


export const HomePageWrapper=styled.div`
display: flex;
flex:1;
justify-content: center;
`

export const UserForm=styled.form`
display: flex;
flex-direction: column;
gap: 20px;
min-width: 300px;
min-height: 300px;
padding: 20px;
border-radius: 8px;
border: 1px solid green;
`

export const UserFormName= styled.div`
font-size: 24px;
font-weight: bold;
color: ${colors.formTitle};
`