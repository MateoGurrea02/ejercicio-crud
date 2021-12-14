import Message from "./Message";

const SongDetail = ({ search, lyric, bio }) => {
  if (!lyric || !bio) return null;

  return (
    <>
      {lyric.error || lyric.err || lyric.name === "AbortError"  ? (
        <Message
          msg={`Error:no existe la cancion "${search.song}"`}
          bgColor="#dc3545"
        />
      ) : (
        <div>
          <h3>{search.song}</h3>
          <blockquote style={{whiteSpace:"pre-wrap"}}>{lyric.lyrics}</blockquote>
        </div>
      )}
      {bio.artists ? (
        <section>
          <h3>{bio.artists[0].strArtist}</h3>
          <img src={bio.artists[0].strArtistThumb} alt={bio.artists[0].strArtist}/>
          <p>{bio.artists[0].intBornYear} - {bio.artists[0].intDieYear || "Presente"}</p>
          <p>{bio.artists[0].strCountry}</p>
          <a href={`http://${bio.artists[0].strWebsite}`} target="_blank" rel="noreferrer" >Sitio Web Oficial</a>
          <p>{bio.artists[0].strGenre} - {bio.artists[0].strStyle}</p>
          <p>{bio.artists[0].strBiographyEN}</p>
        </section>
      ) : (
        <Message  msg={`Error:no existe el interprete "${search.artist}"`}
        bgColor="#dc3545"/>
      )}
    </>
  );
};

export default SongDetail;
