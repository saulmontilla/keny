<?php

namespace App\Models\Dashboard;

use App\Models\Relations\Dashboard\MenuRelations;
use App\Models\Scopes\Dashboard\MenuScopes;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Facades\Gate;

class Menu extends Model
{
    use HasFactory, MenuRelations, MenuScopes;

    protected $table = 'modules';

    public $timestamps = false;

    /**
     * El usuario tiene permiso para acceder al modulo
     */
    public function isModuleAllowed(): bool
    {
        return Gate::allows('SHOW', $this->alias);
    }

    /**
     * Obtiene los hijos de los modulos de forma recursiva
     */
    public function getRecursiveChildrens(bool $check_allowance = true, ?Menu $parent = null): self
    {
        if (!is_null($parent)) {
            $this->name_with_parents .= $parent->name_with_parents . ' / ' . $this->nombre;
        } else {
            $this->name_with_parents = $this->nombre;
        }

        $has_childrens = $this->childrens->count() > 0;

        if ($has_childrens) {
            $this->unsetRelation('childrens');
            $this->childrens = $this->childrens()
                ->withChildrens()
                ->get();

            if ($check_allowance) {
                $this->childrens = $this->childrens->filter->isModuleAllowed()->values();
            }

            $this->childrens = $this->childrens->map->getRecursiveChildrens($check_allowance, $this);

            return $this;
        } else {
            return $this;
        }
    }
}
