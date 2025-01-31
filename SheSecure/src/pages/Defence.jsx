import react from "react";

function Defence() {
  return (
    <div className="card">
      <div className="card-content">
        <h3 className="card-title">
          {" "}
          &nbsp;&nbsp;&nbsp;&nbsp;Stalkers & Stalking
        </h3>
        <p className="card-paragraph">
          Stalking is a strange crime because it is determined by the way the
          victim/target perceives another person's actions and behaviors, rather
          than by those actions themselves. A person can make continuous phone
          calls, send emails, have gifts and packages delivered to another, and
          as long as that person doesn't feel at risk from these actions or mind
          them happening, they should not be defined as stalking. When these
          actions and behaviors form a campaign, which causes the
          target/recipient of them to fear for/consider their personal safety,
          then the term "stalking" can be applied. It is important to note that
          it is a string of activities committed over time rather than odd
          isolated incidents, which really define stalking.
        </p>
        <button className="card-button">Read More</button>
      </div>

      <div className="card-media">
        <div className="card-video">
          <iframe
            className="video"
            src="https://www.youtube.com/embed/6PeMLpY7ZJ0"
            title="Empowering Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Defence;
