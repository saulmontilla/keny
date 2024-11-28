<?php

namespace App\Http\Requests\Dashboard;

use Illuminate\Foundation\Http\FormRequest;

class StoreWorkRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'plate' => ['required', 'string', 'max:15'],
            'vehicle' => ['required', 'integer'],
            'date' => ['required', 'date'],
            'description' => ['string', 'nullable'],
            'services' => ['required', 'array'],
            'services.*.id' => ['required', 'integer'],
            'services.*.amount' => ['required', 'numeric'],
            'services.*.name' => ['required', 'string'],
            'services.*.rendersInPdf' => ['required', 'boolean'],
            'services.*.type' => ['required', 'numeric'],
        ];
    }
}
