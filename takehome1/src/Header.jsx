function Header() {
  return (
    <header>
      <h1>My Website</h1>
      <nav>
        <ul>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>About</a>
          </li>
          <li>
            <a href='#'>Contact</a>
          </li>
        </ul>
      </nav>
      <div className='search-bar'>
        <input type='text' placeholder='Search...' />
        <button type='submit'>Search</button>
      </div>
      <div className='social-media'>
        <a href='#'>
          <i className='fab fa-facebook-f'></i>
        </a>
        <a href='#'>
          <i className='fab fa-twitter'></i>
        </a>
        <a href='#'>
          <i className='fab fa-instagram'></i>
        </a>
      </div>
    </header>
  );
}

export default Header;
