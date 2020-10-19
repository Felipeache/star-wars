import React from 'react'

const Paginator = (props) => {
    return (
        <div class="pagination">
            <ul class="pagination">
                <li class="page-item disabled">
                    <a class="page-link" href="#">Previous</a>
                    <a class="page-link" href="#">Next</a>
                </li>               
            </ul>
        </div>
        

    );
}

export default Paginator