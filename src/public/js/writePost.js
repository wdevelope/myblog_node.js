async function createPost() {
  try {
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const category = document.getElementById('category').value;

    const postData = { title, content, category };

    const response = await fetch('/api/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    });

    if (!response.ok) {
      throw new Error('게시글 작성 실패');
    }
    alert('게시글 작성 성공!');
  } catch (error) {
    alert(data.errorMessage || '게시글 작성중 에러가 발생했습니다');
    console.log('에러 발생');
  }
}
