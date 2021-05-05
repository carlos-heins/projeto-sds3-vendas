const DataTable = () => {
    return (
        <div className="table-responsive">
    <table className="table table-striped table-sm">
        <thead>
            <tr>
                <th>Data</th>
                <th>Vendedor</th>
                <th>Clientes visitados</th>
                <th>Negócios fechados</th>
                <th>Valor</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>22/04/2021</td>
                <td>Barry Allen</td>
                <td>34</td>
                <td>25</td>
                <td>15017.00</td>
            </tr>
            <tr>
                <td>25/05/2021</td>
                <td>Carlinhos da van</td>
                <td>234</td>
                <td>233</td>
                <td>152012.00</td>
            </tr>            <tr>
                <td>12/02/2021</td>
                <td>Amendo Bobo</td>
                <td>2</td>
                <td>1</td>
                <td>0.50</td>
            </tr>            <tr>
                <td>22/07/1991</td>
                <td>Rick Barry</td>
                <td>23</td>
                <td>29</td>
                <td>12017.00</td>
            </tr>
        </tbody>
    </table>
</div>
    )
}

export default DataTable;