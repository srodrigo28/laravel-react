#### sql script
DROP DATABASE laravel;

CREATE DATABASE laravel;

#### Criando o projeto
* link
```
https://www.youtube.com/watch?v=vQms4DJHm-M
```
* verificar se tem o composer instalado no computador
* composer create-project laravel/laravel
* cd laravel
* composer require laravel/breeze --dev
* php artisan breeze:install
    * Selecionar React com Breeze, digitar "react"
    * Selecionar recurso opcional, digitar "dark"
    * Selecionar framework para teste, digitar "1"

* instalar as dependências do NodeJS
* npm install

* npm run dev
* php artisan serve

#### php Migrate

* php artisan make:seeder UserSeeder

* editar os arquivos 
    * User/Model <b>nada a fazer </b>
    * UserSeeder.php <b> editar </b>
    ```
    use App\Models\User;
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::firstOrCreate(
            [ 'email' => 'admin@gmail.com' ],
            [ 'name' => 'Sebastião', 'email' => 'admin@gmail.com',
            'password' => '1234admin']
        );
        User::firstOrCreate(
            [ 'email' => 'admin1@gmail.com' ],
            [ 'name' => 'Edson', 'email' => 'admin1@gmail.com',
            'password' => '1234admin']
        );
    }
    ```
    
    * DatabaseSeeder.php <b> editar </b>
    ```
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            UserSeeder::class,
        ]);
    }
    ```
* success -> php artisan migrate

* php artisan db:seed

#### User defalt
APP_TIMEZONE=America/Sao_Paulo
admin@gmail.com
1234admin