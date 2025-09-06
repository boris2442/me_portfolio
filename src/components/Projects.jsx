import chataw from '../assets/projects_images/chataw.png';
import quiz from '../assets/projects_images/quiz.png';
import spes from '../assets/projects_images/spes.png';
import streaming from '../assets/projects_images/streaming.png';

export default function () {
  return (
    <section id="Projects" className="projects">
      <h2>My Recents Projects</h2>
      <div className="content">
        <div data-aos='flip-left'>
          <div className="project-img">
            <img src={chataw} alt="" srcset="" />
          </div>
          <hr />
          <div className="description">
            <p>
              A platform dedicated to event planning, offering personalized catering services for weddings, seminars and receptions.
            </p>
            <button> <a href="https://evendeco.com/">View more</a> </button>
          </div>
        </div>
        <div data-aos='flip-left'>
          <div className="project-img">
            <img src={quiz} alt="" srcset="" />
          </div>
          <hr />
          <div className="description">
            <p>
              A student management app that allows users to track payments, courses, and personal academic information efficiently</p>
            <button> <a href="https://campuspay.evendeco.com/">View more</a> </button>
          </div>
        </div>
        <div data-aos='flip-left'>
          <div className="project-img">
            <img src={spes} alt="" srcset="" />
          </div>
          <hr />
          <div className="description">
            <p>
              A complete management system for God Fashion that streamlines orders, stock, and client interactions, built with Laravel and Tailwind CSS.
            </p>
            <button> <a href="https://godfashion.evendeco.com/">View more</a> </button>
          </div>
        </div>
        <div data-aos='flip-left'>
          <div className="project-img">
            <img src={streaming} alt="" srcset="" />
          </div>
          <hr />
          <div className="description">
            <p>
              An e-commerce platform for Boris Tech that allows users to browse, order, and pay for electronic devices securely, built with Laravel and Tailwind CSS.
            </p>
            <button> <a href="https://boristech.evendeco.com">View more</a> </button>
          </div>
        </div>
      </div>
    </section>
  );
}
