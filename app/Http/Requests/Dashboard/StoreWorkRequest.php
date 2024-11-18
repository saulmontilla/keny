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
            'description' => ['required', 'string'],
            'servicesWithAmount' => ['required', 'array'],
            'servicesWithAmount.*.id' => ['required', 'integer'],
            'servicesWithAmount.*.base_amount' => ['required', 'numeric'],
            'labour' => ['required', 'numeric'],
            'materials' => ['required', 'numeric'],
        ];
    }
}
