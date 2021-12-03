import styled from 'styled-components';

export const ShareToolContainer = styled.div`
  display: flex;

  .social-icons{
    width: 44px;
    height: 40px;
    border-radius: 4px;
    background: pink;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s;
    margin-right: 10px;

    &:hover{
      margin-top: -3px;
      transition: 0.3s;
    }
  }

  .react-share__ShareButton{
    display: flex;
  }

  .whatsapp{
    margin-left: 10px;
    background-color: #25d366; 
  }

  .facebook{
    background-color: #4267b2;
  }

  .email{
    background-color: #7d7d7d;
  }

  .twitter{
    background-color:#55acee ;
  }

  .linkedin{
    background-color: #0077b5;
  }
`;