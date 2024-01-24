import React from "react";

const Sidebar = () => {
  return (
    <div className="max-w-xs bg-gray-100 p-4">
      <div className="font-bold text-lg">News &amp; Interviews</div>
      <div className="my-2">Readers' Most Anticipated Books of January</div>
      <div className="my-2">Readers' Most Anticipated Books of January</div>
      <div className="mb-2 text-sm">
        172 likes &middot; 40 comments
      </div>
      <div className="my-2">Love lists?</div>
      <div className="my-2">
        <strong>The Help</strong> by Kathryn Stockett<br />
        <strong>The Kite Runner</strong> by Khaled Hosseini<br />
        <strong>Water for Elephants</strong> by Sara Gruen<br />
        <strong>The Book Thief</strong> by Markus Zusak
      </div>
      <div className="my-4 font-bold">Best for Book Clubs</div>
      <div className="mb-2 text-sm">
        11,978 books | 15,895 voters
      </div>
      <div className="my-2">
        <strong>The Girl with the Dragon Tattoo</strong> by Stieg Larsson<br />
        <strong>And Then There Were None</strong> by Agatha Christie<br />
        <strong>Angels &amp; Demons</strong> by Dan Brown<br />
        <strong>Rebecca</strong> by Daphne du Maurier
      </div>
      <div className="my-4 font-bold">Best Crime &amp; Mystery Books</div>
      <div className="mb-2 text-sm">
        7,046 books | 15,481 voters
      </div>
      <div className="my-2">
        <strong>To Kill a Mockingbird</strong> by Harper Lee<br />
        <strong>1984</strong> by George Orwell<br />
        <strong>The Great Gatsby</strong> by F. Scott Fitzgerald<br />
        <strong>Harry Potter and the Sorcerer's Stone</strong> by J.K. Rowling
      </div>
      <div className="my-4 font-bold">Best Books of the 20th Century</div>
      <div className="mb-2 text-sm">
        7,706 books | 50,874 voters
      </div>
      <div className="my-2">More book lists</div>
      <div className="my-4 text-sm text-gray-600">
        Are you an author or a publisher? Gain access to a massive audience of book lovers. Goodreads is a great place to promote your books.
      </div>
    </div>
  );
};

export default Sidebar;
