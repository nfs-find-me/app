<script>
	import '../style/button.css';
	import '../style/input.css';
	import '../style/animation.css';
	import { isLogged } from '../store/isLogged';
	import { currentPage } from '../store/pathStore';
</script>

<slot />
<p>Test connexion : {$isLogged}</p>
<p>Test connexion : {$currentPage}</p>
