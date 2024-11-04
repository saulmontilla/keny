<?php

namespace App\Http\Requests\Dashboard;

use Illuminate\Foundation\Http\FormRequest;

class StoreWorkController extends FormRequest
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
            'plate' => ['required', 'string', 'max:10'],
            'model' => ['required', 'string', 'max:50'],
            'date' => ['required', 'date'],
            'amount' => ['required', 'numeric'],
            'description' => ['required', 'string'],
            'services' => ['required', 'array'],
            'services.*' => ['required', 'string'],
        ];
    }
}
