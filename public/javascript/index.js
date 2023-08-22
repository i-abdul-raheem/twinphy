const reportContent = document.getElementById('report-content');
const reportButton = document.getElementById('report-submit');
let reportMessage;
if (reportContent) {
  reportContent.addEventListener('change', (e) => {
    reportMessage = e.target.value;
  });
}
if (reportButton) {
  reportButton.addEventListener('click', (e) => {
    e.preventDefault();

    fetch(`/post/report/1234`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: reportMessage }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(`report sent!`);
        // Create a "Done" message element
        const doneMessage = document.createElement('span');
        doneMessage.textContent = 'Done';
        doneMessage.style.color = 'green';

        // Append the message to the comment container
        const commentContainer = document.getElementById('comment');
        commentContainer.append(doneMessage);

        // Remove the message after 3 seconds
        setTimeout(() => {
          commentContainer.removeChild(doneMessage);
        }, 3000);

        // Assuming you have a socket.io instance initialized
        // socket.emit('new report', data); // Emitting the "new report" event with the data returned from the server
      });
  });
}

function getTimeDifference(serverTime) {
  const currentTime = Date.now(); // Current timestamp (milliseconds)
  const timeDifference = currentTime - serverTime;

  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30.4375); // Approximate average month length
  const years = Math.floor(months / 12);

  let timeString = '';
  if (years > 0) {
    timeString = years === 1 ? '1 year' : `${years} years`;
  } else if (months > 0) {
    timeString = months === 1 ? '1 month' : `${months} months`;
  } else if (days > 0) {
    timeString = days === 1 ? '1 day' : `${days} days`;
  } else if (hours > 0) {
    timeString = hours === 1 ? '1 hour' : `${hours} hours`;
  } else if (minutes > 0) {
    timeString = minutes === 1 ? '1 minute' : `${minutes} minutes`;
  } else {
    timeString = seconds === 1 ? '1 second' : `${seconds} seconds`;
  }

  return timeString;
}
const picTop = document.getElementById('pic-top');
const getUser = async () => {
  const res = await fetch('/user');
  const user = await res.json();

  picTop.src = user.user.google.pic;
};

window.onload = () => {
  // getUser();
  // const socket = io('/');
  // let posts = [];
  // const postArea = document.getElementById('post-area');
  // const getNewPost = async (data) => {
  //   const res = await fetch(`/post/owner/${data.owner}`);
  //   const { google, avatar, followers, following, posts } = await res.json();
  //   const postCardDiv = document.createElement('div');
  //   postCardDiv.classList.add('post-card');

  //   const topMetaDiv = document.createElement('div');
  //   topMetaDiv.classList.add('top-meta');

  //   const dFlexDiv = document.createElement('div');
  //   dFlexDiv.classList.add(
  //     'd-flex',
  //     'justify-content-between',
  //     'align-items-start'
  //   );

  //   const userProfileLink = document.createElement('a');
  //   //userProfileLink.href = 'user-profile.html';
  //   userProfileLink.classList.add('media', 'media-40');

  //   const userImage = document.createElement('img');
  //   userImage.classList.add('rounded');
  //   userImage.src = google.pic ? google.pic : '/';
  //   userImage.alt = '/';

  //   userProfileLink.appendChild(userImage);

  //   const metaContentDiv = document.createElement('div');
  //   metaContentDiv.classList.add('meta-content', 'ms-3');

  //   const userTitle = document.createElement('h6');
  //   userTitle.classList.add('title', 'mb-0');
  //   const userTitleLink = document.createElement('a');
  //   userTitleLink.href = 'user-profile.html';
  //   userTitleLink.textContent = google.name;
  //   userTitle.appendChild(userTitleLink);

  //   const metaList = document.createElement('ul');
  //   metaList.classList.add('meta-list');

  //   const locationLi = document.createElement('li');
  //   const locationSvg = document.createElementNS(
  //     'http://www.w3.org/2000/svg',
  //     'svg'
  //   );
  //   locationSvg.setAttribute('width', '14');
  //   locationSvg.setAttribute('height', '14');
  //   locationSvg.setAttribute('viewBox', '0 0 14 14');
  //   locationSvg.setAttribute('fill', 'none');
  //   const locationPath1 = document.createElementNS(
  //     'http://www.w3.org/2000/svg',
  //     'path'
  //   );
  //   locationPath1.setAttribute(
  //     'd',
  //     'M12.25 5.83331C12.25 9.91665 7 13.4166 7 13.4166C7 13.4166 1.75 9.91665 1.75 5.83331C1.75 4.44093 2.30312 3.10557 3.28769 2.121C4.27226 1.13644 5.60761 0.583313 7 0.583313C8.39239 0.583313 9.72774 1.13644 10.7123 2.121C11.6969 3.10557 12.25 4.44093 12.25 5.83331Z'
  //   );
  //   locationPath1.setAttribute('stroke', 'black');
  //   locationPath1.setAttribute('stroke-opacity', '0.6');
  //   locationPath1.setAttribute('stroke-linecap', 'round');
  //   locationPath1.setAttribute('stroke-linejoin', 'round');
  //   const locationPath2 = document.createElementNS(
  //     'http://www.w3.org/2000/svg',
  //     'path'
  //   );
  //   locationPath2.setAttribute(
  //     'd',
  //     'M7 7.58331C7.9665 7.58331 8.75 6.79981 8.75 5.83331C8.75 4.86681 7.9665 4.08331 7 4.08331C6.0335 4.08331 5.25 4.86681 5.25 5.83331C5.25 6.79981 6.0335 7.58331 7 7.58331Z'
  //   );
  //   locationPath2.setAttribute('stroke', 'black');
  //   locationPath2.setAttribute('stroke-opacity', '0.6');
  //   locationPath2.setAttribute('stroke-linecap', 'round');
  //   locationPath2.setAttribute('stroke-linejoin', 'round');
  //   locationSvg.appendChild(locationPath1);
  //   locationSvg.appendChild(locationPath2);
  //   const locationText = document.createTextNode('');
  //   locationLi.appendChild(locationSvg);
  //   locationLi.appendChild(locationText);

  //   const timeAgoLi = document.createElement('li');

  //   console.log(data.createdAt);
  //   const timeAgoText = document.createTextNode(
  //     getTimeDifference(data.createdAt) + 'ago'
  //   );
  //   timeAgoLi.appendChild(timeAgoText);

  //   metaList.appendChild(locationLi);
  //   metaList.appendChild(timeAgoLi);

  //   metaContentDiv.appendChild(userTitle);
  //   metaContentDiv.appendChild(metaList);

  //   dFlexDiv.appendChild(userProfileLink);
  //   dFlexDiv.appendChild(metaContentDiv);

  //   const offCanvasLink = document.createElement('a');
  //   offCanvasLink.href = 'javascript:void(0);';
  //   offCanvasLink.classList.add('item-content', 'item-link');
  //   offCanvasLink.setAttribute('data-bs-toggle', 'offcanvas');
  //   offCanvasLink.setAttribute('data-bs-target', '#offcanvasBottom1');
  //   offCanvasLink.setAttribute('aria-controls', 'offcanvasBottom');

  //   const offCanvasSvg = document.createElementNS(
  //     'http://www.w3.org/2000/svg',
  //     'svg'
  //   );
  //   offCanvasSvg.setAttribute('width', '15');
  //   offCanvasSvg.setAttribute('height', '14');
  //   offCanvasSvg.setAttribute('viewBox', '0 0 15 14');
  //   offCanvasSvg.setAttribute('fill', 'none');
  //   const offCanvasPath = document.createElementNS(
  //     'http://www.w3.org/2000/svg',
  //     'path'
  //   );
  //   offCanvasPath.setAttribute(
  //     'd',
  //     'M14.7566 4.93237L9.60021 0.182841C9.14886 -0.23294 8.4375 0.104591 8.4375 0.750465V3.25212C3.73157 3.30959 0 4.31562 0 9.07267C0 10.9927 1.1596 12.8948 2.4414 13.8893C2.84139 14.1996 3.41145 13.8101 3.26397 13.3071C1.93553 8.77542 3.89405 7.57236 8.4375 7.50264V10.25C8.4375 10.8969 9.14942 11.2329 9.60021 10.8176L14.7566 6.06761C15.0809 5.7688 15.0814 5.23158 14.7566 4.93237Z'
  //   );
  //   offCanvasPath.setAttribute('fill', '#E4BEAB');
  //   offCanvasSvg.appendChild(offCanvasPath);

  //   offCanvasLink.appendChild(offCanvasSvg);

  //   topMetaDiv.appendChild(dFlexDiv);
  //   topMetaDiv.appendChild(offCanvasLink);

  //   const postContent = document.createElement('p');
  //   postContent.classList.add('text-black');
  //   const postContentText = document.createTextNode(data.caption);
  //   postContent.appendChild(postContentText);

  //   const dzMediaDiv = document.createElement('div');
  //   dzMediaDiv.classList.add('dz-media');

  //   const postImage = document.createElement('img');
  //   postImage.src = data.file ? data.file : null;
  //   postImage.alt = '/';

  //   const postMetaBtnDiv = document.createElement('div');
  //   postMetaBtnDiv.classList.add('post-meta-btn');

  //   const metaBtnUl = document.createElement('ul');

  //   const likesLi = document.createElement('li');
  //   const likesLink = document.createElement('a');
  //   likesLink.href = 'javascript:void(0);';
  //   likesLink.classList.add('action-btn', 'bg-primary');
  //   const likesIcon1 = document.createElement('i');
  //   likesIcon1.classList.add('fa-regular', 'fa-heart', 'fill-icon');
  //   const likesIcon2 = document.createElement('i');
  //   likesIcon2.classList.add('fa-solid', 'fa-heart', 'fill-icon-2');
  //   const likesCount = document.createElement('h6');
  //   likesCount.classList.add('font-14', 'mb-0', 'ms-2');
  //   likesCount.id = 'value1';
  //   likesCount.textContent = data.likes.length;
  //   likesLink.appendChild(likesIcon1);
  //   likesLink.appendChild(likesIcon2);
  //   likesLink.appendChild(likesCount);
  //   likesLi.appendChild(likesLink);

  //   const shareLi = document.createElement('li');
  //   const shareLink = document.createElement('a');
  //   shareLink.href = 'javascript:void(0);';
  //   shareLink.classList.add('action-btn', 'bg-primary');
  //   const shareIcon = document.createElement('i');
  //   shareIcon.classList.add('fa-solid', 'fa-comment', 'fill-icon');
  //   const shareCount = document.createElement('h6');
  //   shareCount.textContent = 2;

  //   shareCount.classList.add('font-14', 'mb-0', 'ms-2');
  //   shareLink.appendChild(shareIcon);
  //   shareLink.appendChild(shareCount);
  //   shareLi.appendChild(shareLink);
  //   const div = document.createElement('div');
  //   div.classList.add('sharethis-inline-share-buttons');

  //   const commentsLi = document.createElement('li');
  //   const commentsLink = document.createElement('a');
  //   commentsLink.href = `comment.html?post-id=${data._id}`;
  //   commentsLink.classList.add('action-btn', 'bg-secondary');
  //   const commentsIcon = document.createElement('i');
  //   commentsIcon.classList.add('fa-solid', 'fa-comment', 'fill-icon');
  //   const commentsCount = document.createElement('h6');
  //   commentsCount.setAttribute('id', data._id);
  //   commentsCount.classList.add('comment', 'font-14', 'mb-0', 'ms-2');
  //   commentsCount.textContent = data.comments.length;
  //   commentsLink.appendChild(commentsIcon);
  //   commentsLink.appendChild(commentsCount);
  //   commentsLi.appendChild(commentsLink);

  //   metaBtnUl.appendChild(likesLi);
  //   metaBtnUl.appendChild(shareLi);
  //   metaBtnUl.appendChild(div);

  //   metaBtnUl.appendChild(commentsLi);

  //   postMetaBtnDiv.appendChild(metaBtnUl);

  //   dzMediaDiv.appendChild(postImage);
  //   dzMediaDiv.appendChild(postMetaBtnDiv);

  //   postCardDiv.appendChild(topMetaDiv);
  //   postCardDiv.appendChild(postContent);
  //   postCardDiv.appendChild(dzMediaDiv);
  //   postArea.insertBefore(postCardDiv, postArea.firstChild);
  //   // postArea.appendChild(postCardDiv);
  // };

  // const getPosts = async () => {
  //   const response = await fetch(`/post/list`);
  //   const data = await response.json();
  //   posts = data;
  //   posts.reverse();
  //   // Clear existing posts
  //   postArea.innerHTML = '';

  //   posts.forEach(async (post) => {
  //     //get the owner of the post
  //     const res2 = await fetch('/user');

  //     const res = await fetch(`/post/owner/${post.owner}`);

  //     const data = await res.json();

  //     const { google, avatar, followers, following, posts } = data;
  //     // Create HTML elements
  //     const postCardDiv = document.createElement('div');
  //     postCardDiv.classList.add('post-card');

  //     const topMetaDiv = document.createElement('div');
  //     topMetaDiv.classList.add('top-meta');

  //     const dFlexDiv = document.createElement('div');
  //     dFlexDiv.classList.add(
  //       'd-flex',
  //       'justify-content-between',
  //       'align-items-start'
  //     );

  //     const userProfileLink = document.createElement('a');
  //     //userProfileLink.href = 'user-profile.html';
  //     userProfileLink.classList.add('media', 'media-40');

  //     const userImage = document.createElement('img');
  //     userImage.classList.add('rounded');
  //     userImage.src = '/assets/images/avatar/user.png';
  //     userImage.alt = 'profile';

  //     userProfileLink.appendChild(userImage);

  //     const metaContentDiv = document.createElement('div');
  //     metaContentDiv.classList.add('meta-content', 'ms-3');

  //     const userTitle = document.createElement('h6');
  //     userTitle.classList.add('title', 'mb-0');
  //     const userTitleLink = document.createElement('a');
  //     userTitleLink.href = 'user-profile.html';
  //     userTitleLink.textContent = google.name;
  //     userTitle.appendChild(userTitleLink);

  //     const metaList = document.createElement('ul');
  //     metaList.classList.add('meta-list');

  //     const locationLi = document.createElement('li');
  //     const locationSvg = document.createElementNS(
  //       'http://www.w3.org/2000/svg',
  //       'svg'
  //     );
  //     locationSvg.setAttribute('width', '14');
  //     locationSvg.setAttribute('height', '14');
  //     locationSvg.setAttribute('viewBox', '0 0 14 14');
  //     locationSvg.setAttribute('fill', 'none');
  //     const locationPath1 = document.createElementNS(
  //       'http://www.w3.org/2000/svg',
  //       'path'
  //     );
  //     locationPath1.setAttribute(
  //       'd',
  //       'M12.25 5.83331C12.25 9.91665 7 13.4166 7 13.4166C7 13.4166 1.75 9.91665 1.75 5.83331C1.75 4.44093 2.30312 3.10557 3.28769 2.121C4.27226 1.13644 5.60761 0.583313 7 0.583313C8.39239 0.583313 9.72774 1.13644 10.7123 2.121C11.6969 3.10557 12.25 4.44093 12.25 5.83331Z'
  //     );
  //     locationPath1.setAttribute('stroke', 'black');
  //     locationPath1.setAttribute('stroke-opacity', '0.6');
  //     locationPath1.setAttribute('stroke-linecap', 'round');
  //     locationPath1.setAttribute('stroke-linejoin', 'round');
  //     const locationPath2 = document.createElementNS(
  //       'http://www.w3.org/2000/svg',
  //       'path'
  //     );
  //     locationPath2.setAttribute(
  //       'd',
  //       'M7 7.58331C7.9665 7.58331 8.75 6.79981 8.75 5.83331C8.75 4.86681 7.9665 4.08331 7 4.08331C6.0335 4.08331 5.25 4.86681 5.25 5.83331C5.25 6.79981 6.0335 7.58331 7 7.58331Z'
  //     );
  //     locationPath2.setAttribute('stroke', 'black');
  //     locationPath2.setAttribute('stroke-opacity', '0.6');
  //     locationPath2.setAttribute('stroke-linecap', 'round');
  //     locationPath2.setAttribute('stroke-linejoin', 'round');
  //     locationSvg.appendChild(locationPath1);
  //     locationSvg.appendChild(locationPath2);
  //     const locationText = document.createTextNode('');
  //     locationLi.appendChild(locationSvg);
  //     locationLi.appendChild(locationText);

  //     const timeAgoLi = document.createElement('li');
  //     const timeAgoText = document.createTextNode(
  //       getTimeDifference(post.createdAt) + 'ago'
  //     );
  //     timeAgoLi.appendChild(timeAgoText);

  //     metaList.appendChild(locationLi);
  //     metaList.appendChild(timeAgoLi);

  //     metaContentDiv.appendChild(userTitle);
  //     metaContentDiv.appendChild(metaList);

  //     dFlexDiv.appendChild(userProfileLink);
  //     dFlexDiv.appendChild(metaContentDiv);

  //     const rightIcons = document.createElement('div');
  //     rightIcons.classList.add('right-icons');

  //     const report = document.createElement('a');
  //     report.classList.add('item-content', 'item-link');
  //     report.setAttribute('data-bs-toggle', 'offcanvas');
  //     report.setAttribute('data-bs-target', '#offcanvasTop');

  //     const reportIcon = document.createElement('i');
  //     reportIcon.classList.add(
  //       'fa-sharp',
  //       'fa-solid',
  //       'fa-circle-exclamation',
  //       'report-icon'
  //     );
  //     report.appendChild(reportIcon);
  //     report.title = 'report post';

  //     const offCanvasSvg = document.createElementNS(
  //       'http://www.w3.org/2000/svg',
  //       'svg'
  //     );
  //     offCanvasSvg.setAttribute('width', '15');
  //     offCanvasSvg.setAttribute('height', '14');
  //     offCanvasSvg.setAttribute('viewBox', '0 0 15 14');
  //     offCanvasSvg.setAttribute('fill', 'none');
  //     const offCanvasPath = document.createElementNS(
  //       'http://www.w3.org/2000/svg',
  //       'path'
  //     );
  //     offCanvasPath.setAttribute(
  //       'd',
  //       'M14.7566 4.93237L9.60021 0.182841C9.14886 -0.23294 8.4375 0.104591 8.4375 0.750465V3.25212C3.73157 3.30959 0 4.31562 0 9.07267C0 10.9927 1.1596 12.8948 2.4414 13.8893C2.84139 14.1996 3.41145 13.8101 3.26397 13.3071C1.93553 8.77542 3.89405 7.57236 8.4375 7.50264V10.25C8.4375 10.8969 9.14942 11.2329 9.60021 10.8176L14.7566 6.06761C15.0809 5.7688 15.0814 5.23158 14.7566 4.93237Z'
  //     );
  //     offCanvasPath.setAttribute('fill', '#E4BEAB');
  //     offCanvasSvg.appendChild(offCanvasPath);

  //     topMetaDiv.appendChild(dFlexDiv);

  //     rightIcons.appendChild(report);

  //     topMetaDiv.appendChild(rightIcons);

  //     const postContent = document.createElement('p');
  //     postContent.classList.add('text-black');
  //     const postContentText = document.createTextNode(post.caption);
  //     postContent.appendChild(postContentText);

  //     const dzMediaDiv = document.createElement('div');
  //     dzMediaDiv.classList.add('dz-media');

  //     const postImage = document.createElement('img');
  //     postImage.src = post.file ? post.file : 'assets/images/post/pic1.png';
  //     postImage.alt = '/';
  //     postImage.classList.add('post-image');

  //     const postMetaBtnDiv = document.createElement('div');
  //     postMetaBtnDiv.classList.add('post-meta-btn');

  //     const metaBtnUl = document.createElement('ul');

  //     const likesLi = document.createElement('li');
  //     const likesLink = document.createElement('a');
  //     likesLink.href = 'javascript:void(0);';
  //     likesLink.classList.add('action-btn', 'bg-primary');
  //     const likesIcon1 = document.createElement('i');
  //     likesIcon1.classList.add('fa-regular', 'fa-heart', 'fill-icon');
  //     const likesIcon2 = document.createElement('i');
  //     likesIcon2.classList.add('fa-solid', 'fa-heart', 'fill-icon-2');
  //     const likesCount = document.createElement('h6');
  //     likesCount.classList.add('font-14', 'mb-0', 'ms-2');
  //     likesCount.id = 'value1';
  //     likesCount.textContent = post.likes.length;
  //     likesLink.appendChild(likesIcon1);
  //     likesLink.appendChild(likesIcon2);
  //     likesLink.appendChild(likesCount);
  //     likesLi.appendChild(likesLink);

  //     const shareLi = document.createElement('li');
  //     const shareLink = document.createElement('a');
  //     shareLink.href = 'javascript:void(0);';
  //     shareLink.classList.add('action-btn', 'bg-primary');
  //     const shareIcon = document.createElement('i');
  //     shareIcon.classList.add('fa-solid', 'fa-share');
  //     const shareCount = document.createElement('h6');
  //     shareCount.textContent = shareCount.classList.add(
  //       'font-14',
  //       'mb-0',
  //       'ms-2'
  //     );
  //     shareLink.appendChild(shareIcon);
  //     shareLink.appendChild(shareCount);
  //     shareLi.appendChild(shareLink);

  //     // Create the share modal elements
  //     const shareModal = document.createElement('div');
  //     shareModal.id = 'shareModal';
  //     shareModal.className = 'modal';

  //     const modalContent = document.createElement('div');
  //     modalContent.className = 'icons-modal-content';

  //     const closeBtn = document.createElement('span');
  //     closeBtn.className = 'close';
  //     closeBtn.innerHTML = '&times;';

  //     const shareList = document.createElement('ul');
  //     shareList.classList.add('share-icons');

  //     const facebookShareItem = document.createElement('li');
  //     const facebookShareLink = document.createElement('a');
  //     const facebookShareIcon = document.createElement('i');

  //     // Add Facebook share icon classes
  //     facebookShareIcon.classList.add('fab', 'fa-facebook', 'social-icon');

  //     // Set Facebook share link attributes
  //     facebookShareLink.href = `https://www.facebook.com/sharer.php?u=${encodeURIComponent(
  //       `${window.location.href}#${post._id}`
  //     )}`;
  //     facebookShareLink.target = '_blank';
  //     facebookShareLink.title = 'Share on Facebook';
  //     facebookShareLink.appendChild(facebookShareIcon);

  //     // Append Facebook share link to the list item
  //     facebookShareItem.appendChild(facebookShareLink);

  //     const whatsappShareItem = document.createElement('li');
  //     const whatsappShareLink = document.createElement('a');
  //     const whatsappShareIcon = document.createElement('i');

  //     // Add WhatsApp share icon classes
  //     whatsappShareIcon.classList.add('fab', 'fa-whatsapp', 'social-icon');

  //     // Set WhatsApp share link attributes
  //     whatsappShareLink.href = `https://api.whatsapp.com/send?text=${encodeURIComponent(
  //       `${window.location.href}#${post._id}`
  //     )}`;
  //     whatsappShareLink.target = '_blank';
  //     whatsappShareLink.title = 'Share on WhatsApp';
  //     whatsappShareLink.appendChild(whatsappShareIcon);

  //     // Append WhatsApp share link to the list item
  //     whatsappShareItem.appendChild(whatsappShareLink);

  //     const twitterShareItem = document.createElement('li');
  //     const twitterShareLink = document.createElement('a');
  //     const twitterShareIcon = document.createElement('i');

  //     // Add Twitter share icon classes
  //     twitterShareIcon.classList.add('fab', 'fa-twitter', 'social-icon');

  //     // Set Twitter share link attributes
  //     twitterShareLink.href = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
  //       `${window.location.href}#${post._id}`
  //     )}`;
  //     twitterShareLink.target = '_blank';
  //     twitterShareLink.title = 'Share on Twitter';
  //     twitterShareLink.appendChild(twitterShareIcon);

  //     // Append Twitter share link to the list item
  //     twitterShareItem.appendChild(twitterShareLink);

  //     const instagramShareItem = document.createElement('li');
  //     const instagramShareLink = document.createElement('a');
  //     const instagramShareIcon = document.createElement('i');

  //     // Add Instagram share icon classes
  //     instagramShareIcon.classList.add('fab', 'fa-instagram', 'social-icon');

  //     // Set Instagram share link attributes
  //     instagramShareLink.href = `https://www.instagram.com/share?url=${encodeURIComponent(
  //       `${window.location.href}#${post._id}`
  //     )}`;
  //     instagramShareLink.target = '_blank';
  //     instagramShareLink.title = 'Share on Instagram';
  //     instagramShareLink.appendChild(instagramShareIcon);

  //     // Append Instagram share link to the list item
  //     instagramShareItem.appendChild(instagramShareLink);

  //     const snapchatShareItem = document.createElement('li');
  //     const snapchatShareLink = document.createElement('a');
  //     const snapchatShareIcon = document.createElement('i');

  //     // Add Snapchat share icon classes
  //     snapchatShareIcon.classList.add('fab', 'fa-snapchat', 'social-icon');

  //     // Set Snapchat share link attributes
  //     snapchatShareLink.href = `https://www.snapchat.com/add/your-username?${encodeURIComponent(
  //       `${window.location.href}#${post._id}`
  //     )}`;
  //     snapchatShareLink.target = '_blank';
  //     snapchatShareLink.title = 'Share on Snapchat';
  //     snapchatShareLink.appendChild(snapchatShareIcon);

  //     // Append Snapchat share link to the list item
  //     snapchatShareItem.appendChild(snapchatShareLink);

  //     // Append the share modal elements to the DOM
  //     shareList.appendChild(facebookShareItem);
  //     shareList.appendChild(whatsappShareItem);
  //     shareList.appendChild(twitterShareItem);
  //     shareList.appendChild(instagramShareItem);
  //     shareList.appendChild(snapchatShareItem);

  //     modalContent.appendChild(closeBtn);
  //     modalContent.appendChild(shareList);

  //     shareModal.appendChild(modalContent);

  //     document.body.appendChild(shareModal);

  //     // Show the share modal when the share button is clicked
  //     shareLi.addEventListener('click', () => {
  //       shareModal.style.display = 'block';
  //     });

  //     // Hide the share modal when the close button is clicked

  //     closeBtn.addEventListener('click', () => {
  //       shareModal.style.display = 'none';
  //     });

  //     // Hide the share modal when the user clicks outside the modal
  //     window.addEventListener('click', (event) => {
  //       if (event.target == shareModal) {
  //         shareModal.style.display = 'none';
  //       }
  //     });

  //     // Add a click event listener to the Facebook share button
  //     facebookShareItem.addEventListener('click', () => {
  //       const imageUrl = post.file;
  //       const postText = post.caption;

  //       // Construct the Facebook share URL
  //       const facebookShareUrl = `https://www.facebook.com/sharer.php?u=${encodeURIComponent(
  //         window.location.href
  //       )}&picture=${encodeURIComponent(imageUrl)}&title=${encodeURIComponent(
  //         postText
  //       )}`;

  //       // Open a new window with the Facebook share URL
  //       window.open(facebookShareUrl, '_blank');
  //     });

  //     instagramShareItem.addEventListener('click', () => {
  //       const imageUrl = post.file;

  //       // Construct the Instagram share URL
  //       const instagramShareUrl = `https://www.instagram.com/share?url=${encodeURIComponent(
  //         window.location.href
  //       )}&media=${encodeURIComponent(imageUrl)}`;

  //       window.open(instagramShareUrl, '_blank');
  //     });

  //     twitterShareItem.addEventListener('click', () => {
  //       const postText = post.conntent;

  //       const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
  //         postText
  //       )}&url=${encodeURIComponent(window.location.href)}`;

  //       // Open a new window with the Twitter share URL
  //       window.open(twitterShareUrl, '_blank');
  //     });

  //     whatsappShareItem.addEventListener('click', () => {
  //       const postText = 'your-post-text';

  //       // Construct the WhatsApp share URL
  //       const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
  //         postText
  //       )}`;

  //       // Open a new window with the WhatsApp share URL
  //       window.open(whatsappShareUrl, '_blank');
  //     });

  //     likesLink.onclick = async () => {
  //       const postId = post._id;
  //       const res = await fetch(`/post/${postId}/likes`);
  //       const data = await res.json();
  //       console.log(data.message);
  //     };

  //     let socket = io();

  //     // Listen for 'postUpdate' events from the server
  //     socket.on('postUpdate', (updatedPost) => {
  //       console.log('Post updated:', updatedPost);
  //       updatePostElement(updatedPost);
  //     });

  //     // Function to update the post element in the DOM
  //     function updatePostElement(post) {
  //       likesCount.textContent = post.likes.length;
  //       //  if (!likesLink.classList.contains("active")) {
  //       //    likesLink.classList.add("active");
  //       //  }
  //       likesLink.classList.toggle('active');
  //     }
  //     const commentsLi = document.createElement('li');
  //     const commentsLink = document.createElement('a');
  //     commentsLink.href = `comment.html?post-id=${post._id}`;
  //     commentsLink.classList.add('action-btn', 'bg-secondary');
  //     const commentsIcon = document.createElement('i');
  //     commentsIcon.classList.add('fa-solid', 'fa-comment', 'fill-icon');
  //     const commentsCount = document.createElement('h6');
  //     commentsCount.classList.add('comment', 'font-14', 'mb-0', 'ms-2');
  //     commentsCount.setAttribute('id', post._id);
  //     commentsCount.textContent = post.comments.length;
  //     commentsLink.appendChild(commentsIcon);
  //     commentsLink.appendChild(commentsCount);
  //     commentsLi.appendChild(commentsLink);

  //     metaBtnUl.appendChild(likesLi);
  //     metaBtnUl.appendChild(commentsLi);
  //     metaBtnUl.appendChild(shareLi);

  //     postMetaBtnDiv.appendChild(metaBtnUl);

  //     dzMediaDiv.appendChild(postImage);
  //     dzMediaDiv.appendChild(postMetaBtnDiv);

  //     postCardDiv.appendChild(topMetaDiv);
  //     postCardDiv.appendChild(postContent);
  //     postCardDiv.appendChild(dzMediaDiv);

  //     postArea.appendChild(postCardDiv);
  //     // Listen for 'postUpdate' events from the server
  //   });
  // };

  // socket.on('newComment', async (data) => {
  //   document.getElementById(data.postId).textContent =
  //     Number(document.getElementById(data.postId).textContent) + 1;
  // });
  // socket.on('newPost', async (data) => {
  //   await getNewPost(data);
  // });
  // getPosts();
};
