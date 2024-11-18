<style>
    table {
        width: 100%;
        border-collapse: collapse;
    }
    table td {
        border: 1px solid black;
    }
</style>

<div>
    <p>
        AVENIDA ALIRIO UGARTE PELAYO, CENTRO EMPRESARIAL TECNO ACERO
    </p>
    <p>
        GALPON NO. 31-9, SECTOR BAJO GUARAPICHE. MATURIN, ESTADO MONAGAS 
    </p>
    <p>
        TELEFONOS 0291-3160614 - 0414-7691827
    </p>
    <p>
        globalacquimicos@gmail.com
    </p>

    <p>
        <strong>
            Código: 
        </strong>
        {{ $work->id }}
    </p>

    <table>
        <tr>
            <td>
                Descripcion
            </td>
            <td>
                Precio
            </td>
        </tr>
        <tr>
            <td>
                Mano de obra: 
                @foreach ($work->services as $index => $service)
                    {{ $service->name }} {{$index + 1 < count($work->services) ? ', ' : ''}}
                @endforeach
            </td>
            <td>
                {{ amount_format($work->totalService)}}
            </td>
        </tr>
        <tr>
            <td>
                Repuestos
            </td>
            <td>
                {{ amount_format($work->labour) }}
            </td>
        </tr>
        <tr>
            <td>
                <strong>
                    Total
                </strong>
            </td>
            <td>
                <strong>
                    {{ amount_format($work->total) }}
                </strong>
            </td>
        </tr>
    </table>
</div>
