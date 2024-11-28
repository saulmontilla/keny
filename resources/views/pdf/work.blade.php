<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>

<style>
    .logo-container {
        text-align: center;
    }
    .logo-container img {
        width: 100px;
        border-radius: 50%;
        height: auto;
    }
    table {
        width: 100%;
        border-collapse: collapse;
    }
    table thead {
        background-color: #2460b8;
        color: #fff;
        text-transform: capitalize;
        text-align: center;
    }
    table td {
        border: 1px solid black;
        
    }
    table tbody tr:nth-child(odd) {
        background-color: #fff;
    }
    table tbody tr:nth-child(even) {
        background-color: #eee;
    }
    .brand-container {
        border: 1px solid black;
        display: inline-block;
        width: auto;
        padding: .5rem 1rem;
    }
    .brand-name {
        font-size: 20px;
        font-weight: bold;
        text-align: center;

    }
    .brand-address {
        font-size: 12px;
    }
    .brand-phone {
        margin-left: 1rem;
    }
    .title {
        text-align: center;
        font-weight: bold;
        text-transform: capitalize;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
    .code-container {
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
    .cell-numeric {
        text-align: right;
    }
    .table-2 {
        margin-top: 2rem;
    }
    .received {
        margin-top: 5rem;
        text-align: center
    }
    .received hr {
        width: 40%;
    }
</style>

<div>
    <div class="brand-container">
        <div class="logo-container">
            <img src="{{public_path() . '/images/logo.jpg'}}" alt="logo">
        </div>
        <div class="brand-name">
            Autoaire Nueva Granada
        </div>
        <div class="brand-address">
            <p>
                Avenida principal Nueva Granada con calle Louis baile
            </p>
            <p>
                Caracas.
            <span class="bran-phone">
                0424-2318801
            </span>
            </p>
        </div>
    </div>

    <div class="code-container">
        <div>
            <strong>
                Código: 
            </strong>
            {{ $work->code }}
        </div>
    
        <div>
            <strong>
                Fecha: 
            </strong>
            {{ $work->created_at->format('d/m/Y') }}
        </div>
    </div>


    <div class="title">
        PRESUPUESTO
    </div>

    <table>
        <thead>
            <tr>
                <td>
                    DESCRIPCIÓN
                </td>
                <td>
                    $
                </td>
                <td>
                    SUBTOTAL
                </td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    Mano de obra: 
                    @foreach ($work->labourServices as $index => $service)
                        {{ $service->name }} {{$index + 1 < count($work->labourServices) ? ', ' : ''}}
                    @endforeach
                </td>
                <td class="cell-numeric">
                    {{ amount_format($work->totalLabour)}}
                </td>
                <td class="cell-numeric">
                    {{ amount_format($work->totalLabour)}}
                </td>
            </tr>
            
            @foreach ($work->enumerableServices as $service)
            <tr>
                <td>
                    {{ $service->name }}
                </td>
                <td class="cell-numeric">
                    {{ amount_format($service->pivot->amount) }}
                </td>
                <td class="cell-numeric">
                    {{ amount_format($service->pivot->amount) }}
                </td>
            </tr>
                
            @endforeach

            <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
            </tr>
            <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
            </tr>
            <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
            </tr>
            <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
            </tr>
            <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
            </tr>
            <tr>
                <td>
                    &nbsp;
                </td>
                <td class="cell-numeric">
                    <strong>
                        Total
                    </strong>
                </td>
                <td class="cell-numeric">
                    <strong>
                        {{ amount_format($work->total) }}
                    </strong>
                </td>
            </tr>
        </tbody>
    </table>

    <table class="table-2">
        <tr>
            <td>
                <strong>
                    Nota:
                </strong>
            </td>
        </tr>
    </table>

    <div class="received">
        <hr />
        Recibido
    </div>
</div>
