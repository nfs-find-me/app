<script>
    import Input from "./common/input.svelte";
    import { InputTypeEnum } from "../../enum/InputType.enum";
    import Button from "./common/button.svelte";
    import { ButtonTypeEnum } from "../../enum/ButtonType.enum";
</script>

<section id="securityInfo" class="flex flex-col w-full px-10 py-16 gap-14">
    <div class="flex flex-col gap-2">
        <h2 class="text-xl font-bold text-blue">Mot de passe</h2>
        <p class="text-text-contrast text-md font-bold">Une fois le mot de passe modifié, vous serez redirigé vers la page de connexion où vous pourrez vous connecter avec votre nouveau mot de passe.</p>
    </div>

    <div class="flex flex-col gap-2 w-full laptop:w-2/4">
        <Input label={'Mot de passe actuel'} type={InputTypeEnum.PASSWORD} id={'password'} name={'password'}/>
        <Input label={'Nouveau mot de passe'} type={InputTypeEnum.PASSWORD} id={'newPassword'} name={'newPassword'}/>
        <Input label={'Confirmez votre mot de passe'} type={InputTypeEnum.PASSWORD} id={'confirmPassword'} name={'confirmPassword'}/>

        <div class="flex flex-row justify-center items-center gap-6">
            <Button type={ButtonTypeEnum.SUBMIT} fill={true} text={"Enregistrer"} />
            <a href="#" class="hover:text-blue hover:underline text-center">J'ai oublié mon mot de passe</a>
        </div>
    </div>
</section>