import React from 'react';
import { Link } from 'react-router-dom';

function GistTitle({ gist, sn }) {
  return (
    <tr>
      <td>{sn + 1}</td>
      <td>
        <Link to={`/g/${gist.id}`}>
          {gist.description || '[no description]'}
        </Link>
      </td>
    </tr>
  );
}

export default GistTitle;
