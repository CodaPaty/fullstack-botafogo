public class Pet {
    private Long id;
    private String nome;
    private String apelido;
    private String especie; // Ex: Cachorro, Gato
    private String raca;
    private String tipoSanguineo;
    
    // Árvore Genealógica Simples
    private Long idPai; 
    private Long idMae;

    // Localização e Social
    private String localizacaoAtual;
    private String biografia; 

    // Relacionamento com o Dono Atual
    private Long idDonoAtual;
    private List<Long> historicoDonosIds; // Lista de IDs de usuários anteriores

    // Listas de Saúde
    private List<Vacina> vacinas;
    private List<Doenca> doencas;
    private List<String> clinicasFrequentadas;

    // Getters e Setters (ou use Lombok @Data)
}