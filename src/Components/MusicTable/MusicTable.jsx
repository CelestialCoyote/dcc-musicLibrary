const MusicTable = (props) => {

    const deleteSong = (id) => {
        console.log(`Delete song ${id} button clicked.`);
    }

    return (

        <table className='styled-table'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Song<br></br>Title</th>
                    <th>Album<br></br>Name</th>
                    <th>Artist /<br></br>Group</th>
                    <th>Genre</th>
                    <th>Release<br></br>Date</th>
                    <th>Delete<br></br>Song</th>
                </tr>
            </thead>
            <tbody>
                {props.mediaData.map((entry, index) => {
                    return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{entry.title}</td>
                            <td>{entry.album}</td>
                            <td>{entry.artist}</td>
                            <td>{entry.genre}</td>
                            <td>{entry.releaseDate}</td>
                            <td><button className='delete-button' onClick={() => deleteSong(entry.id)}>Delete</button></td>
                        </tr>
                    );
                })}
            </tbody>
        </table>

    );
};


export default MusicTable;
