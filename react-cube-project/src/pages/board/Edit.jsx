import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useBoardStore from '../../stores/useBoardStore';
import useMemberStore from '../../stores/useMemberStore';
import {
  BoardContainer,
  Title,
  FormContainer,
  Input,
  Textarea,
  ButtonGroup,
  Button,
  SecondaryButton
} from './BoardStyled';

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { posts, updatePost, initializeBoard } = useBoardStore();
  const { user } = useMemberStore();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (posts.length === 0) {
      initializeBoard();
      return;
    }

    const post = posts.find((p) => p.id === Number(id));

    if (!post) {
      alert("존재하지 않는 게시글입니다.");
      navigate('/board');
      return;
    }

    if (!user || user.name !== post.author) {
      alert("수정 권한이 없습니다.");
      navigate(`/board/${id}`);
      return;
    }

    setTitle(post.title);
    setContent(post.content);

  }, [posts, id, user, navigate, initializeBoard]);

  const handleUpdate = () => {
    if (!title.trim() || !content.trim()) {
      alert("제목과 내용을 모두 입력해주세요.");
      return;
    }

    updatePost(id, title, content);

    alert("수정되었습니다.");
    navigate(`/board/${id}`);
  };

  return (
    <BoardContainer>
      <Title>게시글 수정</Title>

      <FormContainer>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목을 입력하세요"
        />
        <Textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="내용을 입력하세요"
        />
      </FormContainer>

      <ButtonGroup>
        <SecondaryButton onClick={() => navigate(-1)}>
          취소
        </SecondaryButton>
        <Button onClick={handleUpdate}>
          수정 완료
        </Button>
      </ButtonGroup>
    </BoardContainer>
  );
};

export default Edit;