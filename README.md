#### Criando o projeto
* link
```
https://www.youtube.com/watch?v=vQms4DJHm-M
```
* composer create-project laravel/laravel
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
    use App\Models\User;
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

* veryfy -> php artisan make:migration create_users_table;
* success -> php artisan migrate;

* php artisan db:seed

#### User defalt

admin@gmail.com
1234admin