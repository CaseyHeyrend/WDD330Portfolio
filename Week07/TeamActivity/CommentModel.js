// const commentList = [
//     {
//         hikeId: 1,
//         date: new Date(Date.now() - Math.random() * 100000000000),
//         content: 'I hate hiking, but love to at Bechler Falls.',
//     },
//     {
//         hikeId: 1,
//         date: new Date(Date.now() - Math.random() * 100000000000),
//         content: 'I hate hiking, but love to at Bechler Falls.',
//     },
//     {
//         hikeId: 2,
//         date: new Date(Date.now() - Math.random() * 100000000000),
//         content: 'I hate hiking, but love to at Teton Canyon.',
//     },
//     {
//         hikeId: 2,
//         date: new Date(Date.now() - Math.random() * 100000000000),
//         content: 'I hate hiking, but love to at Teton Canyon.',
//     },
//     {
//         hikeId: 3,
//         date: new Date(Date.now() - Math.random() * 100000000000),
//         content: 'I hate hiking, but love to at Denanda Falls.',
//     },
//     {
//         hikeId: 3,
//         date: new Date(Date.now() - Math.random() * 100000000000),
//         content: 'I hate hiking, but love to at Denanda Falls.',
//     },
// ]

export default class CommentModel {
    constructor() {
        this.commentList =
            JSON.parse(localStorage.getItem('commentList') || '[]')
            .map((comment) => {
                comment.date = new Date(comment.date);
                return comment;
            });
    }

    getAllComments() {
        return this.commentList;
    }

    getCommentsByHike(hikeId) {
      return this.commentList.filter(comment => comment.hikeId === hikeId);
    }

    addComment(hikeId, comment) {
        this.commentList.push({
            date: new Date(),
            hikeId: hikeId,
            content: comment,
        });

        this.flushComments();
    }

    flushComments() {
        localStorage.setItem('commentList', JSON.stringify(this.commentList));
    }
}