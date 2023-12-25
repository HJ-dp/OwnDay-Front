import styled from "styled-components";

function ChatRoom() {
  return (
    <Container>
      <ChatHeader>
        <h3>3반1짱2서윤</h3>
        <Close>닫기</Close>
      </ChatHeader>
      <ChatBody>
        <ChatLeft>
          <ProfileImg></ProfileImg>
          <LeftMessage>
            반납 장소에 안돌려 놓으신 거 같아요반납 장소에 안돌려 놓으신 거
            같아요반납 장소에 안돌려 놓으신 거 같아요
          </LeftMessage>
          <Block></Block>
        </ChatLeft>
        <ChatRight>
          <Block></Block>
          <RightMessage>그래서요?</RightMessage>
        </ChatRight>
        <ChatLeft>
          <ProfileImg></ProfileImg>
          <LeftMessage>미친거에요?</LeftMessage>
          <Block></Block>
        </ChatLeft>
        <ChatRight>
          <Block></Block>
          <RightMessage>어쩌라구요.</RightMessage>
        </ChatRight>
        <ChatLeft>
          <ProfileImg></ProfileImg>
          <LeftMessage>신고할게요</LeftMessage>
          <Block></Block>
        </ChatLeft>
        <ChatRight>
          <Block></Block>
          <RightMessage>그러세요 그럼.</RightMessage>
        </ChatRight>
        <ChatRight>
          <Block></Block>
          <RightMessage>한마디만 더 할게요.</RightMessage>
        </ChatRight>
        <ChatRight>
          <Block></Block>
          <RightMessage>님이 잘못했어요. ㅋ</RightMessage>
        </ChatRight>
        <ChatLeft>
          <ProfileImg></ProfileImg>
          <LeftMessage>ㅋㅋㅋㅋㅋ 뭐래니</LeftMessage>
          <Block></Block>
        </ChatLeft>
      </ChatBody>
      <ChatFooter>
        <MessageInput></MessageInput>
        <SendButton></SendButton>
      </ChatFooter>
    </Container>
  );
}

export default ChatRoom;

const SendButton = styled.div`
  background-color: white;
  width: 83px;
  height: 50px;
  border-radius: 10px;
  background-image: url("send.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  cursor: pointer;
`;
const MessageInput = styled.div`
  background-color: white;
  width: 435px;
  height: 50px;
  border-radius: 10px;
`;
const ChatFooter = styled.div`
  margin: 50px 30px 30px 40px;
  display: flex;
  justify-content: space-between;
`;

const Block = styled.div`
  width: 20%;
`;

const RightMessage = styled.div`
  background-color: rgba(83, 109, 254, 0.2);
  padding: 10px 20px 10px 20px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  line-height: 1.2em;
`;
const ChatRight = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const LeftMessage = styled.div`
  background-color: #d9d9d9;
  padding: 10px 20px 10px 20px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  line-height: 1.2em;
`;
const ProfileImg = styled.div`
  background-image: url("profile.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 50px;
  height: 50px;
  border-radius: 9999px;
  flex-shrink: 0;
  margin-right: 10px;
`;
const ChatLeft = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const ChatBody = styled.div`
  margin-left: 40px;
  margin-right: 30px;
  overflow-y: auto;
  max-height: calc(100% - 200px);
`;

const Close = styled.div`
  font-weight: bold;
  color: #304ffe;
  cursor: pointer;
`;

const ChatHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 30px 40px 40px;
`;

const Container = styled.div`
  width: 600px;
  height: 600px;
  border: #3d5afe solid 3px;
  background-color: #f2f2f2;
`;
