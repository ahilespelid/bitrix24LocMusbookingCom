<?php

namespace App\Models;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FirstInstanceDateUpcomingCase extends Model{
    use HasFactory, SoftDeletes;
    
    public $timestamps = true, $table = 'first_instance_date_upcoming_case';
    
    protected $dates = ['deleted_at'], $dateFormat = 'Y-m-d H:i:s', $fillable = ['*'], $guarded = [];
}