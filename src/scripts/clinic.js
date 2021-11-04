import Logo from '../images/clinic.png'
import avatar from '../images/avatar.png'


const clinicTemplate =
    `
  <header class="clinic__header">

    <img class="clinic__logo" src='${Logo}' alt="logo">

    <div class="clinic__user">
      <div class="clinic__user-info">
        <h1 class="clinic__user-name">Miranda Nelson</h1>
        <p class="clinic__user-type">Doctor</p>
      </div>
      <span class="clinic__user-indicator"></span>
      <img class="clinic__user-avatar" src="${avatar}" alt="avatar">
    </div>
  </header>

  <main class="clinic__content">
    <nav class="clinic__content-nav">
      <button class="clinic__content-nav-btn clinic__content-nav-btn_active">Patients</button>
      <button class="clinic__content-nav-btn">Resolutions</button>
    </nav>

    <div class="clinic__content-config">
      <h2 class="clinic__content-config-title">My Patients</h2>
      <input class="clinic__content-config-search" placeholder="Search">
      <span class="search-mobile"></span>
      <span class="sort-mobile"></span>
      <div class="clinic__content-config-wrapper">
        <p class="clinic__content-config-sort-text">Sort by:</p>
        <select class="clinic__content-config-sort">
          <option>Date</option>
          <option>Name</option>
        </select>
      </div>
    </div>

    <div class="clinic__cards">
      <article class="card">
        <div class="card__client">
          <img class="card__client-avatar" src="${avatar}" alt="avatar">
          <h3 class="card__client-name">Jane Cooper</h3>
          <p class="card__client-status">Appointment is confirmed</p>
          <span class="card__client-indicator"></span>
          <button class="card__client-btn"></button>
        </div>
        <div class="card__info">
          <span class="card__info-icon icon-clock"></span>
          <p class="card__info-time">Thu Sept 10, 2021 4 pm – 5 pm</p>
          <span class="card__info-icon icon-clipboard"></span>
          <p class="card__info-message">We will invite you in for a full review every year and more frequently
            if you are struggling with blood sugar levels</p>
        </div>
      </article>
            <article class="card">
        <div class="card__client">
          <img class="card__client-avatar" src="${avatar}" alt="avatar">
          <h3 class="card__client-name">Jane Cooper</h3>
          <p class="card__client-status">Appointment is confirmed</p>
          <span class="card__client-indicator"></span>
          <button class="card__client-btn"></button>
        </div>
        <div class="card__info">
          <span class="card__info-icon icon-clock"></span>
          <p class="card__info-time">Thu Sept 10, 2021 4 pm – 5 pm</p>
          <span class="card__info-icon icon-clipboard"></span>
          <p class="card__info-message">We will invite you in for a full review every year and more frequently
            if you are struggling with blood sugar levels</p>
        </div>
      </article>
            <article class="card">
        <div class="card__client">
          <img class="card__client-avatar" src="${avatar}" alt="avatar">
          <h3 class="card__client-name">Jane Cooper</h3>
          <p class="card__client-status">Appointment is confirmed</p>
          <span class="card__client-indicator"></span>
          <button class="card__client-btn"></button>
        </div>
        <div class="card__info">
          <span class="card__info-icon icon-clock"></span>
          <p class="card__info-time">Thu Sept 10, 2021 4 pm – 5 pm</p>
          <span class="card__info-icon icon-clipboard"></span>
          <p class="card__info-message">We will invite you in for a full review every year and more frequently
            if you are struggling with blood sugar levels</p>
        </div>
      </article>
            <article class="card">
        <div class="card__client">
          <img class="card__client-avatar" src="${avatar}" alt="avatar">
          <h3 class="card__client-name">Jane Cooper</h3>
          <p class="card__client-status">Appointment is confirmed</p>
          <span class="card__client-indicator"></span>
          <button class="card__client-btn"></button>
        </div>
        <div class="card__info">
          <span class="card__info-icon icon-clock"></span>
          <p class="card__info-time">Thu Sept 10, 2021 4 pm – 5 pm</p>
          <span class="card__info-icon icon-clipboard"></span>
          <p class="card__info-message">We will invite you in for a full review every year and more frequently
            if you are struggling with blood sugar levels</p>
        </div>
      </article>
            <article class="card">
        <div class="card__client">
          <img class="card__client-avatar" src="${avatar}" alt="avatar">
          <h3 class="card__client-name">Jane Cooper</h3>
          <p class="card__client-status">Appointment is confirmed</p>
          <span class="card__client-indicator"></span>
          <button class="card__client-btn"></button>
        </div>
        <div class="card__info">
          <span class="card__info-icon icon-clock"></span>
          <p class="card__info-time">Thu Sept 10, 2021 4 pm – 5 pm</p>
          <span class="card__info-icon icon-clipboard"></span>
          <p class="card__info-message">We will invite you in for a full review every year and more frequently
            if you are struggling with blood sugar levels</p>
        </div>
      </article>
            <article class="card">
        <div class="card__client">
          <img class="card__client-avatar" src="${avatar}" alt="avatar">
          <h3 class="card__client-name">Jane Cooper</h3>
          <p class="card__client-status">Appointment is confirmed</p>
          <span class="card__client-indicator"></span>
          <button class="card__client-btn"></button>
        </div>
        <div class="card__info">
          <span class="card__info-icon icon-clock"></span>
          <p class="card__info-time">Thu Sept 10, 2021 4 pm – 5 pm</p>
          <span class="card__info-icon icon-clipboard"></span>
          <p class="card__info-message">We will invite you in for a full review every year and more frequently
            if you are struggling with blood sugar levels</p>
        </div>
      </article>
            <article class="card">
        <div class="card__client">
          <img class="card__client-avatar" src="${avatar}" alt="avatar">
          <h3 class="card__client-name">Jane Cooper</h3>
          <p class="card__client-status">Appointment is confirmed</p>
          <span class="card__client-indicator"></span>
          <button class="card__client-btn"></button>
        </div>
        <div class="card__info">
          <span class="card__info-icon icon-clock"></span>
          <p class="card__info-time">Thu Sept 10, 2021 4 pm – 5 pm</p>
          <span class="card__info-icon icon-clipboard"></span>
          <p class="card__info-message">We will invite you in for a full review every year and more frequently
            if you are struggling with blood sugar levels</p>
        </div>
      </article>
            <article class="card">
        <div class="card__client">
          <img class="card__client-avatar" src="${avatar}" alt="avatar">
          <h3 class="card__client-name">Jane Cooper</h3>
          <p class="card__client-status">Appointment is confirmed</p>
          <span class="card__client-indicator"></span>
          <button class="card__client-btn"></button>
        </div>
        <div class="card__info">
          <span class="card__info-icon icon-clock"></span>
          <p class="card__info-time">Thu Sept 10, 2021 4 pm – 5 pm</p>
          <span class="card__info-icon icon-clipboard"></span>
          <p class="card__info-message">We will invite you in for a full review every year and more frequently
            if you are struggling with blood sugar levels</p>
        </div>
      </article>
            <article class="card">
        <div class="card__client">
          <img class="card__client-avatar" src="${avatar}" alt="avatar">
          <h3 class="card__client-name">Jane Cooper</h3>
          <p class="card__client-status">Appointment is confirmed</p>
          <span class="card__client-indicator"></span>
          <button class="card__client-btn"></button>
        </div>
        <div class="card__info">
          <span class="card__info-icon icon-clock"></span>
          <p class="card__info-time">Thu Sept 10, 2021 4 pm – 5 pm</p>
          <span class="card__info-icon icon-clipboard"></span>
          <p class="card__info-message">We will invite you in for a full review every year and more frequently
            if you are struggling with blood sugar levels</p>
        </div>
      </article>
    </div>
  </main>
`

export {clinicTemplate}