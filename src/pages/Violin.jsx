import '../App.css';


function Violin() {

    const videos = [
        {id: 1, title: "Tchaikovsky Meditation Op. 42", videoId: "JYdcbiHZf04", category: "Solo"},
        {id: 2, title: "Shinichi Suzuki - La Foila", videoId: "9c2dA_4PXR0", category: "Solo"},
    
        {id: 5, title: "Hungarian Rhapsody No. 2 by Franz Liszt", videoId: "nRUxnXRoXUs", category: "Orchestral"},
        {id: 6, title: "Symphony No. 2 in C Minor by Gustav Mahler", videoId: "jOA9OVEPkk0", category: "Orchestral"},
        {id: 7, title: "The Sleeping Beauty, Op. 66 by Pyotr Ilyich Tchaikovsky - Selections from Act III", videoId: "1OkGRYuyBqA", category: "Orchestral"},
      ];

 return (

    <div>
        <div className="violin-header">
            <h1>Violin</h1>
        </div>
        <p className="lead">I have been playing the violin for over 8 years, and have played both solos and orchestral settings. I played for the Minnesota Youth Symphonies Symphony Orcheastra during my last year of highschool and had such a wonderful experience.
            While I don't play as much as I did before, it is still one of my passions.  </p>
        <div className="video-grid">
        {videos.map(video => (
            <div key={video.id} className="video-card">
                <p className="card-title">{video.title}</p>
                <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${video.videoId}`}
                    title={video.title}
                    allowFullScreen
                />
            </div>
        ))}

</div>
    </div>
)

}

export default Violin;